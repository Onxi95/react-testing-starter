import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "1" }} receiver={{ id: "5" }} />);
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note entered, button enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "1" }} receiver={{ id: "5" }} />);
  const amount = screen.getByPlaceholderText(/amount/i);
  const note = screen.getByPlaceholderText(/add a note/i);

  userEvent.type(amount, "50");
  userEvent.type(note, "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
