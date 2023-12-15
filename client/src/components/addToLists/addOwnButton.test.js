it('should add book to OwnedBooks table and set isOwned to true', async () => {
    const userId = 123;
    const bookId = 'ABC123';
    const mockAxios = jest.mock(axios);
    const { getByText } = render(<AddOwnButton userId={userId} bookId={bookId} />);
  
    expect(getByText('Buy')).toBeInTheDocument();
    await fireEvent.click(getByText('Buy'));
  
    expect(mockAxios.post).toHaveBeenCalledWith(
      `http://localhost:8000/user/${userId}/owned-books`,
      { bookId },
    );
  
    // Mock successful API response
    mockAxios.post.mockResolvedValueOnce({ status: 200 });
  
    expect(getByText('Read')).toBeInTheDocument();
    await fireEvent.click(getByText('Read'));
  
    expect(mockAxios.put).toHaveBeenCalledWith(
      `http://localhost:8000/user/${userId}/curr-read`,
      { userId, bookId },
    );
  
    // Verify database or use a mocking library to check for entry in OwnedBooks table
  
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    expect(mockAxios.put).toHaveBeenCalledTimes(1);
  });