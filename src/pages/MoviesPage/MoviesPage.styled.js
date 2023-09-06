import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MoviesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
`;
