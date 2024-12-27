export const queryChatbot = async (question) => {
  try {
      const response = await fetch('http://localhost:3000/api/ai/query', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.answer || 'I apologize, but I could not find an answer to your question.';
  } catch (error) {
      console.error('Error querying chatbot:', error);
      throw error;
  }
};