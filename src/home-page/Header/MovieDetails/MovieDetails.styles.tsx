import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  gap: 60px;

  padding-left: ${({ theme }) => theme.size.pageHorizontalPadding};
  padding-right: ${({ theme }) => theme.size.pageHorizontalPadding};
  padding-bottom: 30px;
  padding-top: 30px;

  .details-title {
    margin: 0;
    font-size: 4rem;
  }

  .details-genre {
    font-size: 1.4rem;
    opacity: 0.5;
  }

  .details-heading {
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 40px;
  }

  .details-rating {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 1px solid #fff;
    font-size: 2rem;
  }

  .details-time-info {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    gap: 50px;
    color: ${({ theme }) => theme.palette.primary};
  }

  .details-movie-description {
    opacity: 0.5;
  }
`;
