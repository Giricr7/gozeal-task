import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Field from '../Field';
import App from '../App';
import Upload from '../Upload';
import Success from '../Success';
import Form from '../Form';


afterEach(() => {
    cleanup();
})

test('should render field component', () => {
    render(<Field />);
    const fieldElement = screen.getByTestId("field_testid");
    expect(fieldElement).toBeInTheDocument();
    expect(fieldElement).toContainHTML('<h3>');
})


test('should render App component', () => {
    render(<App />);
    const appElement = screen.getByTestId("App_testid");
    expect(appElement).toBeInTheDocument();
    expect(appElement).toHaveTextContent("(You can add upto 5 certifications)");
})

test('should render Upload component', () => {
    render(<Upload />);
    const uploadElement = screen.getByTestId("upload_testid");
    expect(uploadElement).toBeInTheDocument();
    expect(uploadElement).toHaveTextContent("Upload a file showing your certification");
})

test('should render Success component', () => {
    render(<Success />);
    const successElement = screen.getByTestId("success_testid");
    expect(successElement).toBeInTheDocument();
    expect(successElement).toContainHTML("a");
})

test('should render Form component', () => {
    render(<Form />);
    const formElement = screen.getByTestId("form_testid");
    expect(formElement).toBeInTheDocument();
    expect(formElement).toContainHTML("Field");
})