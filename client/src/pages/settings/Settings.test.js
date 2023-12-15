JavaScript
it('should update appUser table when username input changes', async () => {
  // Mock dependencies
  const mockAxios = jest.mock(axios);
  const mockUpdateUser = jest.fn();
  const userId = 123;
  const initialUsername = 'oldUsername';
  const newUsername = 'newUsername';

  // Render the Settings component
  const { getByLabelText, getByText } = render(<Settings backend="http://localhost:8000" userId={userId} />);

  // Verify initial username input
  expect(getByLabelText('UserName').value).toBe(initialUsername);

  // Change username input
  fireEvent.change(getByLabelText('UserName'), { target: { value: newUsername } });

  // Simulate form submit
  fireEvent.click(getByText('Submit'));

  // Verify updated user object
  expect(mockUpdateUser).toHaveBeenCalledWith({ userId, user: { ...user, userUN: newUsername } });

  // Verify axios PUT request
  expect(mockAxios.put).toHaveBeenCalledWith(`http://localhost:8000/user/${userId}`, { userInfo: { ...user, userUN: newUsername } });

});