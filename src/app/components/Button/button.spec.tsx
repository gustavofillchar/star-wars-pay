import Button from "./button"
import { render, screen, fireEvent } from "@testing-library/react"

describe("Button", () => {
  it('Should render correctly', () => {
    render(<Button>My example text</Button>)
    expect(screen.getByText("My example text")).toBeInTheDocument()
  })

  it('Should handle click events', () => {
    const handleClick = jest.fn()
    render(<Button click={handleClick}>Click me</Button>)

    const button = screen.getByText("Click me")
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Cannot click me</Button>)

    const button = screen.getByText("Cannot click me")
    expect(button).toBeDisabled()
  })

  it('Should not call click handler when disabled', () => {
    const handleClick = jest.fn()
    render(<Button click={handleClick} disabled>Cannot click me</Button>)

    const button = screen.getByText("Cannot click me")
    fireEvent.click(button)

    expect(handleClick).not.toHaveBeenCalled()
  })
})