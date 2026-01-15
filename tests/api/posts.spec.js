import { test, expect } from '@playwright/test';

test.describe('API Testing - JSONPlaceholder', () => {
  const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

  test('should fetch all posts successfully', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/posts`);
    
    expect(response.status()).toBe(200);
    const posts = await response.json();
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  test('should fetch a single post by ID', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/posts/1`);
    
    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post.id).toBe(1);
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
    expect(post).toHaveProperty('userId');
  });

  test('should return 404 for non-existent post', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/posts/99999`);
    
    expect(response.status()).toBe(404);
  });

  test('should create a new post', async ({ request }) => {
    const response = await request.post(`${API_BASE_URL}/posts`, {
      data: {
        title: 'Test Post',
        body: 'This is a test post',
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);
    const post = await response.json();
    expect(post.title).toBe('Test Post');
    expect(post).toHaveProperty('id');
  });

  test('should update an existing post', async ({ request }) => {
    const response = await request.put(`${API_BASE_URL}/posts/1`, {
      data: {
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1,
        id: 1,
      },
    });

    expect(response.status()).toBe(200);
    const post = await response.json();
    expect(post.title).toBe('Updated Title');
  });

  test('should delete a post', async ({ request }) => {
    const response = await request.delete(`${API_BASE_URL}/posts/1`);
    
    expect(response.status()).toBe(200);
  });

  test('should fetch user by ID', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/users/1`);
    
    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });

  test('should validate response headers', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/posts`);
    
    expect(response.headers()['content-type']).toContain('application/json');
  });

  test('should handle request with query parameters', async ({ request }) => {
    const response = await request.get(`${API_BASE_URL}/posts?userId=1`);
    
    expect(response.status()).toBe(200);
    const posts = await response.json();
    expect(posts.every(post => post.userId === 1)).toBeTruthy();
  });
});
