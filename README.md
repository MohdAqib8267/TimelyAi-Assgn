[TimelyAi.postman_collection.json](https://github.com/MohdAqib8267/TimelyAi-Assgn/files/13937041/TimelyAi.postman_collection.json)# Assignment

# Description of the project.

## API DOCUMENTATION
https://documenter.getpostman.com/view/21628908/2s9YsNfB3W

## Exported Postman Collection
[Uploading{
	"info": {
		"_postman_id": "903b8229-5382-49d7-9c19-acd161d8afa5",
		"name": "TimelyAi",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "21628908"
	},
	"item": [
		{
			"name": "Create Post",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"caption\":\"Hello Coad!\",\r\n  \"media_url\":\"www.code.com\",\r\n  \"user_id\":2\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/posts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"posts"
					]
				},
				"description": "This Api is used to create a new Post for a user."
			},
			"response": [
				{
					"name": "Create Post",
					"originalRequest": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"caption\":\"Hello Coad!\",\r\n  \"media_url\":\"www.code.com\",\r\n  \"user_id\":2\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/posts",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"posts"
							]
						}
					},
					"status": "Created",
					"code": 201,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "111"
						},
						{
							"key": "ETag",
							"value": "W/\"6f-zOE1+9R1vH0lh8Eb0Bw3q7TWaCM\""
						},
						{
							"key": "Date",
							"value": "Mon, 15 Jan 2024 07:34:47 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"id\": 6,\n    \"caption\": \"Hello Coad!\",\n    \"media_url\": \"www.code.com\",\n    \"created_at\": \"2024-01-15T07:34:46.986Z\",\n    \"user_id\": 2\n}"
				}
			]
		},
		{
			"name": "Get All Posts",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/posts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"posts"
					]
				},
				"description": "This is used to find all posts."
			},
			"response": [
				{
					"name": "Get All Posts",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/posts",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"posts"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "339"
						},
						{
							"key": "ETag",
							"value": "W/\"153-SbVNPhuE5lnwuLURKW0o+M0gPWA\""
						},
						{
							"key": "Date",
							"value": "Mon, 15 Jan 2024 07:34:54 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "[\n    {\n        \"id\": 3,\n        \"caption\": \"Hellow\",\n        \"media_url\": \"www.google.com\",\n        \"created_at\": \"2024-01-14T22:12:35.146Z\",\n        \"user_id\": 1\n    },\n    {\n        \"id\": 4,\n        \"caption\": \"Hellow  India\",\n        \"media_url\": \"www.youtube.com\",\n        \"created_at\": \"2024-01-14T22:12:57.335Z\",\n        \"user_id\": 1\n    },\n    {\n        \"id\": 6,\n        \"caption\": \"Hello Coad!\",\n        \"media_url\": \"www.code.com\",\n        \"created_at\": \"2024-01-15T07:34:46.986Z\",\n        \"user_id\": 2\n    }\n]"
				}
			]
		},
		{
			"name": "Get Posts for a specific user",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/posts/2",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"posts",
						"2"
					]
				},
				"description": "This Api find posts for a specific user."
			},
			"response": [
				{
					"name": "Get Posts for a specific user",
					"originalRequest": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/api/posts/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"posts",
								"2"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "113"
						},
						{
							"key": "ETag",
							"value": "W/\"71-1Um509uhOeXnVTXT7NH3ZIGLlhU\""
						},
						{
							"key": "Date",
							"value": "Mon, 15 Jan 2024 07:31:20 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "[\n    {\n        \"id\": 5,\n        \"caption\": \"Hello Coad!\",\n        \"media_url\": \"www.code.com\",\n        \"created_at\": \"2024-01-15T07:30:41.949Z\",\n        \"user_id\": 2\n    }\n]"
				}
			]
		},
		{
			"name": "Update Post",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"caption\":\"Wonderful Post Comm\",\r\n  \"media_url\":\"www.youtube.com\",\r\n  \"user_id\":2\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/posts/5",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"posts",
						"5"
					]
				}
			},
			"response": [
				{
					"name": "Update Post",
					"originalRequest": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"caption\":\"Wonderful Post Comm\",\r\n  \"media_url\":\"www.youtube.com\",\r\n  \"user_id\":2\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/posts/5",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"posts",
								"5"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "122"
						},
						{
							"key": "ETag",
							"value": "W/\"7a-uEOwDDizwzkKLNvPYQrMiSIGZwE\""
						},
						{
							"key": "Date",
							"value": "Mon, 15 Jan 2024 07:32:31 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"id\": 5,\n    \"caption\": \"Wonderful Post Comm\",\n    \"media_url\": \"www.youtube.com\",\n    \"created_at\": \"2024-01-15T07:30:41.949Z\",\n    \"user_id\": 2\n}"
				}
			]
		},
		{
			"name": "Delete a specific post for a user",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"user_id\":2\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/posts/5",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"posts",
						"5"
					]
				}
			},
			"response": [
				{
					"name": "Delete a specific post for a user",
					"originalRequest": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"user_id\":2\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/posts/5",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"posts",
								"5"
							]
						}
					},
					"status": "OK",
					"code": 200,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "52"
						},
						{
							"key": "ETag",
							"value": "W/\"34-+F5FK7FG/iwcyigAiaVAu/02YAA\""
						},
						{
							"key": "Date",
							"value": "Mon, 15 Jan 2024 07:34:36 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"Post deleted successfully for the user\"\n}"
				}
			]
		},
		{
			"name": "Delete All Posts",
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"user_id\":1\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/posts",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"posts"
					]
				}
			},
			"response": [
				{
					"name": "Delete All Posts",
					"originalRequest": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"user_id\":3\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/posts",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"posts"
							]
						}
					},
					"status": "Not Found",
					"code": 404,
					"_postman_previewlanguage": "json",
					"header": [
						{
							"key": "X-Powered-By",
							"value": "Express"
						},
						{
							"key": "Access-Control-Allow-Origin",
							"value": "*"
						},
						{
							"key": "Content-Type",
							"value": "application/json; charset=utf-8"
						},
						{
							"key": "Content-Length",
							"value": "41"
						},
						{
							"key": "ETag",
							"value": "W/\"29-EDXGWi2NFjLMbvIhICC7tOHoyiw\""
						},
						{
							"key": "Date",
							"value": "Mon, 15 Jan 2024 08:00:23 GMT"
						},
						{
							"key": "Connection",
							"value": "keep-alive"
						},
						{
							"key": "Keep-Alive",
							"value": "timeout=5"
						}
					],
					"cookie": [],
					"body": "{\n    \"message\": \"No posts found for the user\"\n}"
				}
			]
		}
	]
} TimelyAi.postman_collection.json…]()



## Used Tech stack:
Node.js, Express, PostgreSQL, Postman.

## To Run this project
> 1.Clone Repo <br/>
> 2.Run on terminal to ins
> ### npm install 
> 3.To start development run
> ### npm run dev
>
> ## Database Schema
> ### Table: Posts
| Column      | Type       | Details                        |
|-------------|------------|--------------------------------|
| id          | Integer    | Primary Key, Autoincrement     |
| user_id     | Integer    |                                |
| caption     | String     | Variable-length string         |
| media_url   | String     |                                |
| created_at  | Timestamp  | Default: Current timestamp     |
