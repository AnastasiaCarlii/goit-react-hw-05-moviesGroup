import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 0;
  margin: 20px 0;
  list-style: none;
  border-top: 1px solid #e0e0e0;

  & > li:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`;

export const ReviewItem = styled.li`
  margin-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 16px;
`;

export const Author = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Content = styled.p`
  margin: 15px 0;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  text-align: justify;

  &::first-letter {
    font-size: 1.2em;
    font-weight: bold;
  }
`;
