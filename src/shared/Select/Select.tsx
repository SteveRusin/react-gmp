import { PureComponent, MouseEvent as ReactMouseEvent } from 'react';
import { ThemeConsumer } from 'styled-components';
import { CheckSquare, Checkbox } from '@styled-icons/boxicons-regular';

import { SelectOption } from '@shared';
import { Input } from '@shared/FormControls';

import { SelectProps, SelectState } from './Select.models';
import {
  Option,
  OptionsWrapper,
  SelectTriangle,
  SelectWrapper,
} from './Select.styles';
import { isMultiSelect } from './Select.helpers';

export class Select<TId> extends PureComponent<
  SelectProps<TId>,
  SelectState<TId>
> {
  static defaultProps: Partial<SelectProps<unknown>> = {
    placeholder: 'Select something',
  };

  selectClass = 'select-component';

  state: SelectState<TId> = {
    isOpen: false,
    selectedOptions: new Set<TId>(),
  };

  toggleIsOpen = () => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
    });
  };

  handleOutsideClick = (e: MouseEvent) => {
    if (!this.state.isOpen) {
      return;
    }

    const target = e.target as HTMLElement;

    const clickedOnTheSelect = target.closest(`.${this.selectClass}`);

    if (clickedOnTheSelect) {
      return;
    }

    this.toggleIsOpen();
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick);
  }

  private onOptionSelect = (optionId: TId, e: ReactMouseEvent) => {
    const selectedOptions = this.state.selectedOptions;

    if (selectedOptions.has(optionId)) {
      selectedOptions.delete(optionId);
    } else {
      selectedOptions.add(optionId);
    }

    if (isMultiSelect<TId>(this.props)) {
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
      this.props.onSelect([...selectedOptions]);
    } else {
      this.props.onSelect(optionId);
    }
  };

  private findSelectedOption() {
    if (this.props.value == null) {
      return null;
    }

    const optionsMap = new Map(
      this.props.options.map(({ id, name }) => [id, name])
    );

    if (isMultiSelect<TId>(this.props)) {
      return this.props.value.map((id) => optionsMap.get(id)).join(', ');
    } else {
      return optionsMap.get(this.props.value);
    }
  }

  private getCheckbox(id: TId) {
    if (!isMultiSelect(this.props)) {
      return;
    }

    if (this.state.selectedOptions.has(id)) {
      return <CheckSquare size='20' />;
    }

    return <Checkbox size='20' />;
  }

  render() {
    const { isOpen } = this.state;
    const { options, placeholder } = this.props;
    const triggerValue = this.findSelectedOption();

    return (
      <SelectWrapper
        data-testid='select'
        onClick={this.toggleIsOpen}
        className={this.selectClass}
      >
        <div className='placeholder-wrapper'>
          <Input
            className='select-trigger'
            readOnly
            value={triggerValue ?? ''}
            placeholder={placeholder}
          ></Input>
          <ThemeConsumer>
            {(theme) => (
              <SelectTriangle color={theme.palette.primary} size='25' />
            )}
          </ThemeConsumer>
        </div>
        {isOpen && (
          <OptionsWrapper>
            {options.map(({ name, id }: SelectOption<TId>) => (
              <Option
                className={
                  this.state.selectedOptions.has(id)
                    ? 'option-selected'
                    : undefined
                }
                key={`${id}`}
                onClick={(e) => this.onOptionSelect(id, e)}
                data-value={id}
              >
                {this.getCheckbox(id)}
                {name}
              </Option>
            ))}
          </OptionsWrapper>
        )}
      </SelectWrapper>
    );
  }
}
