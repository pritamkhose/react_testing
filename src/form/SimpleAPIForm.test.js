import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SimpleAPIForm from './SimpleAPIForm';
import * as apiServiceMock from './api';
 
jest.mock('./api');
 
test('form makes a api call with proper value', async () => {
    apiServiceMock.postProducts.mockResolvedValueOnce({ ok: true });
    const { getByText, getByLabelText, debug } = render(<SimpleAPIForm />);
    const inputField = getByLabelText(/Body:/i);
    const submitBtn = getByText(/Post/i);
    fireEvent.change(inputField, { 'target': { 'value': 'Sample Title' } });
    fireEvent.click(submitBtn);
    expect(apiServiceMock.postProducts).toHaveBeenCalledTimes(1);
    expect(apiServiceMock.postProducts).toHaveBeenCalledWith("Sample Title");
    await wait(() => null);
});