export const postOrderItem = async (orderItem) => {
    try {
      // send a POST request to the API endpoint
      const response = await fetch(`http://localhost:3000//orderitem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderItem),
      });
      // handle the response
      if (!response.ok) {
        throw new Error('Failed to post order item to API');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };