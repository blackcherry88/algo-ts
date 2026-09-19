interface ApiErrorResponse {
  statusCode: number;
  message: string;
  details?: string[];
}

function isApiErrorResponse(error: unknown): error is ApiErrorResponse {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  const errorResponse = error as ApiErrorResponse;
  return (
    typeof errorResponse.statusCode === 'number' &&
    typeof errorResponse.message === 'string'
  );
}

function handleFetchError(error: unknown): string {
  if (isApiErrorResponse(error)) {
    return `[HTTP Error ${error.statusCode}]: ${error.message}`;
  }

  if (error instanceof Error) {
    return `[System Error]: ${error.message}`;
  }
  return 'An unknown error occurred.';
}

try {
  throw { statusCode: 404, message: 'Resource not found' };
} catch (error) {
  console.error(handleFetchError(error));
}
