import React from "react";
import "@testing-library/jest-dom";
import { render, screen, within, fireEvent } from "@/__tests__/utils";
import { render, fireEvent, screen } from "@testing-library/react";
import CreateProduct from "./CreateProduct";

describe("CreateProduct Component Tests", () => {
  it("should update Product Name input correctly", () => {
    render(<CreateProduct />);

    const productNameInput = screen.getByLabelText("Product Name :");

    // Simulasikan input teks
    fireEvent.change(productNameInput, { target: { value: "Test Product" } });

    // Periksa apakah input Product Name telah diperbarui dengan benar
    expect(productNameInput.value).toBe("Test Product");
  });

  it("should update Product Category select correctly", () => {
    render(<CreateProduct />);

    const productCategorySelect = screen.getByLabelText("Product Category :");

    // Simulasikan pemilihan opsi
    fireEvent.change(productCategorySelect, {
      target: { value: "Television" },
    });

    // Periksa apakah opsi telah dipilih dengan benar
    expect(productCategorySelect.value).toBe("Television");
  });

  it("should update Product Freshness radio buttons correctly", () => {
    render(<CreateProduct />);

    const brandNewRadio = screen.getByLabelText("Brand New");
    const secondHandRadio = screen.getByLabelText("Second Hand");

    // Simulasikan pemilihan radio button
    fireEvent.click(secondHandRadio);

    // Periksa apakah radio button yang dipilih adalah "Second Hand"
    expect(secondHandRadio.checked).toBe(true);

    // Periksa apakah radio button "Brand New" tidak dipilih
    expect(brandNewRadio.checked).toBe(false);
  });
});
