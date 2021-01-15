import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const container = render(<CheckoutForm/>)
    const header = container.getByText("Checkout Form")
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    const container = render(<CheckoutForm/>)

    const firstName = container.getByLabelText(/first name/i)
    const lastName = container.getByLabelText(/last Name/i)
    const address = container.getByLabelText(/address/i)
    const city = container.getByLabelText(/city/i)
    const state = container.getByLabelText(/state/i)
    const zip = container.getByLabelText(/zip/i)

    fireEvent.change(firstName, { target: { value:'Tara' }})
    fireEvent.change(lastName, { target: { value:'Timmerman' }})
    fireEvent.change(address, { target: { value:'8415 Sleepy Hollow St.' }})
    fireEvent.change(city, { target: { value:'Smithtown' }})
    fireEvent.change(state, { target: { value:'NY' }})
    fireEvent.change(zip, { target: { value:'11787' }})

    const submitButton = container.getByText('Checkout');
    fireEvent.click(submitButton);

    const successMessage = container.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();
});
