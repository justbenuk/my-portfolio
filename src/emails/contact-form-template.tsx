export default function ContactFormTemplate(data: { email: string, name: string, subject: string, message: string }) {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <h1>Message From {data.name}</h1>
      <p>Subject: {data.subject}</p>
      <p>Message: {data.message}</p>
      <p>Reply Address: {data.email}</p>
    </div>
  )
}

