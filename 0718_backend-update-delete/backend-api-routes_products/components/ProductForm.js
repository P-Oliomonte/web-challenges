import styled from "styled-components";
import Button from "./Button";

export default function ProductForm({ value, onSubmit }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <h4>Add a new fish</h4>
        <FormElementContainer>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" defaultValue={value.name} />
        </FormElementContainer>

        <FormElementContainer>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            defaultValue={value.description}
          />
        </FormElementContainer>

        <FormElementContainer>
          <label htmlFor="Price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={value.price}
          />
        </FormElementContainer>

        <FormElementContainer>
          <label htmlFor="currency">Currency: </label>
          <select id="currency" name="currency" defaultValue={value.currency}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBR">GBR</option>
          </select>
        </FormElementContainer>
        <Button color="#EEE" type="submit" buttonText="Submit" />
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
`;

const FormElementContainer = styled.div`
  margin-bottom: 8px;
  padding: 5px;
  width: 280px;
  display: flex;
  justify-content: space-between;
  background-color: #dddddd;
`;
