import { useHistory } from 'react-router-dom';

import { ButtonPrimary } from './ButtonPrimary';
import { FlexColumnContainer } from './FlexColumnContainer';

export const NotFoundPage = () => {
  const history = useHistory();

  return (
    <FlexColumnContainer
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2>The page you are trying to visit does not exist</h2>
      <ButtonPrimary onClick={() => history.push('/')}>
        Back to main
      </ButtonPrimary>
    </FlexColumnContainer>
  );
};
