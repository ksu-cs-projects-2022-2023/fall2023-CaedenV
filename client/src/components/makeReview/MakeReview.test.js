it('should update Reviews table with new review', async () => {
    const bookId = 'ABC123';
    const userId = 123;
    const bookAvgRating = 3.5;
    const mockAxios = jest.mock(axios);
  
    const reviewTitle = 'A great read!';
    const reviewRating = 4;
    const reviewText = 'This book was suspenseful and kept me hooked!';
  
    const { getByText, getByPlaceholderText } = render(<MakeReview bookId={bookId} userId={userId} bookAvgRating={bookAvgRating} />);
  
    // Simulate user input
    getByPlaceholderText('How about a title?').value = reviewTitle;
    getByPlaceholderText('3').value = reviewRating;
    getByPlaceholderText('How was it? Let us know in more detail...').value = reviewText;
  
    await fireEvent.click(getByText('Submit Review'));
  
    expect(mockAxios.post).toHaveBeenCalledWith(
      `http://localhost:8000/books/${bookId}/reviews`,
      { title: reviewTitle, rating: reviewRating, text: reviewText, userId: userId },
    );
  
    mockAxios.post.mockResolvedValueOnce({
      data: { oldAvg: { BookAvgRating: 3 }, numRevs: { count: 10 } },
    });
  
    expect(getByText('New average rating: 3.75')).toBeInTheDocument(); // Display calculated new rating
  
    // Optional - Mock update average rating call
    expect(mockAxios.put).toHaveBeenCalledWith(
      `http://localhost:8000/books/${bookId}/avgRating`,
      { newAvg: 3.75 },
    );
  
    expect(mockAxios.post).toHaveBeenCalledTimes(1);
    // expect(mockAxios.put).toHaveBeenCalledTimes(1); // Uncomment if mocking update call
  });