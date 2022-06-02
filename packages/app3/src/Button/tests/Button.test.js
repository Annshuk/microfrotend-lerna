import { screen, render } from '@testing-library/react';

import Button from '../index';

describe('Test Component', () => {
	const renderComponent = () => render(<Button />);

	it('should have label', () => {
		renderComponent();

		expect(screen.getByTestId('button')).toHaveTextContent('Hello from app3');
	});

	it('should match the snapshot', () => {
		const { container } = renderComponent();

		expect(container).toMatchSnapshot();
	});
});
