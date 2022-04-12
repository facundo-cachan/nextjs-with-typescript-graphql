import { render, screen } from '@testing-library/react';

import { Buttons } from 'components/';

const Id = Math.random() * (9999 - 1) + 1;
const name = 'Button';
const accessKey = 'b';
const action = () => {};
const isColor = 'is-primary';
const isLoading = 'is-loading';
const classes = 'button';

describe('Buttons', () => {
    test('Simple', async () => {
        render(<Buttons.Simple
            id={Id}
            arial-label={name}
            datatest-id={Id}
            accessKey={accessKey}
            onClick={action}
            className={`button ${isColor} ${isLoading} ${classes}`}
            tabIndex={0}
            title={Id}
            text={name}
            loading
            color="danger"
        />);
        expect(screen.findByTestId(Id)).toBeTruthy();
    });
    test('Linked', async () => {
        render(<Buttons.Linked
            id={Id}
            arial-label={name}
            datatest-id={Id}
            accessKey={accessKey}
            onClick={action}
            className={`button ${isColor} ${isLoading} ${classes}`}
            tabIndex={0}
            title={Id}
            text={name}
            loading
            color="danger"
        />);
        expect(screen.getByText(name)).toBeTruthy();
    });
})
