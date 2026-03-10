# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### 1. Get All Leads

**Endpoint:** `GET /api/leads`

**Description:** Retrieve all captured leads

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "propertyType": "apartment",
    "budget": "$500k-$1M",
    "message": "Looking for 2BR apartment",
    "status": "new",
    "createdAt": "2024-03-09T10:30:00.000Z"
  }
]
```

**Status Codes:**
- `200 OK` - Success

---

### 2. Create New Lead

**Endpoint:** `POST /api/leads`

**Description:** Create a new lead from contact form or WhatsApp

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1987654321",
  "propertyType": "villa",
  "budget": "$1M-$2M",
  "message": "Interested in luxury villas",
  "source": "website"
}
```

**Response:**
```json
{
  "id": 2,
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1987654321",
  "propertyType": "villa",
  "budget": "$1M-$2M",
  "message": "Interested in luxury villas",
  "status": "new",
  "source": "website",
  "createdAt": "2024-03-09T10:35:00.000Z"
}
```

**Status Codes:**
- `201 Created` - Lead created successfully
- `400 Bad Request` - Invalid data

---

### 3. Update Lead Status

**Endpoint:** `PATCH /api/leads/:id`

**Description:** Update the status of a lead

**URL Parameters:**
- `id` (integer) - Lead ID

**Request Body:**
```json
{
  "status": "contacted"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "propertyType": "apartment",
  "budget": "$500k-$1M",
  "message": "Looking for 2BR apartment",
  "status": "contacted",
  "createdAt": "2024-03-09T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Status updated successfully
- `404 Not Found` - Lead not found

---

## Lead Object Schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | integer | Auto | Unique identifier |
| name | string | Yes | Lead's full name |
| email | string | Yes | Email address |
| phone | string | Yes | Phone number |
| propertyType | string | Yes | Type of property (apartment, villa, penthouse, commercial) |
| budget | string | No | Budget range |
| message | string | No | Additional message |
| status | string | Auto | Lead status (new, contacted, qualified, closed) |
| source | string | No | Lead source (website, whatsapp) |
| createdAt | datetime | Auto | Creation timestamp |

---

## Status Values

| Status | Description |
|--------|-------------|
| new | Newly captured lead |
| contacted | Lead has been contacted |
| qualified | Lead is qualified and interested |
| closed | Deal closed or lead rejected |

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Invalid request data",
  "details": "Email is required"
}
```

### 404 Not Found
```json
{
  "error": "Lead not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "message": "Error description"
}
```

---

## Example Usage

### JavaScript (Axios)

**Get All Leads:**
```javascript
const response = await axios.get('http://localhost:5000/api/leads');
console.log(response.data);
```

**Create Lead:**
```javascript
const newLead = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  propertyType: 'apartment',
  budget: '$500k-$1M',
  message: 'Looking for 2BR apartment'
};

const response = await axios.post('http://localhost:5000/api/leads', newLead);
console.log(response.data);
```

**Update Lead Status:**
```javascript
const response = await axios.patch('http://localhost:5000/api/leads/1', {
  status: 'contacted'
});
console.log(response.data);
```

---

### cURL

**Get All Leads:**
```bash
curl http://localhost:5000/api/leads
```

**Create Lead:**
```bash
curl -X POST http://localhost:5000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "propertyType": "apartment",
    "budget": "$500k-$1M",
    "message": "Looking for 2BR apartment"
  }'
```

**Update Lead Status:**
```bash
curl -X PATCH http://localhost:5000/api/leads/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "contacted"}'
```

---

## Rate Limiting

Currently no rate limiting is implemented. For production, consider adding rate limiting middleware.

## Authentication

Currently no authentication is required. For production, implement JWT or OAuth authentication.

## CORS

CORS is enabled for all origins in development. Update CORS configuration for production:

```javascript
app.use(cors({
  origin: 'https://your-domain.com'
}));
```

---

## Future Enhancements

- [ ] Authentication & Authorization
- [ ] Pagination for leads list
- [ ] Search and filter endpoints
- [ ] Lead assignment to agents
- [ ] Email notifications
- [ ] File upload for documents
- [ ] Analytics endpoints
