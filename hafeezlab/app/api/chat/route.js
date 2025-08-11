export async function POST(request) {
    try {
        const { message } = await request.json()

        if (!message) {
            return Response.json({ error: "Message is required" }, { status: 400 })
        }

        // Check if the query is medical-related
        const medicalKeywords = [
            "health",
            "medical",
            "disease",
            "symptom",
            "diagnosis",
            "treatment",
            "medicine",
            "doctor",
            "hospital",
            "clinic",
            "test",
            "lab",
            "blood",
            "urine",
            "scan",
            "x-ray",
            "mri",
            "ct",
            "ultrasound",
            "biopsy",
            "infection",
            "virus",
            "bacteria",
            "pain",
            "fever",
            "headache",
            "cough",
            "cold",
            "flu",
            "diabetes",
            "pressure",
            "heart",
            "lung",
            "kidney",
            "liver",
            "stomach",
            "bone",
            "muscle",
            "skin",
            "eye",
            "ear",
            "throat",
            "chest",
            "back",
            "joint",
            "allergy",
            "medication",
            "prescription",
            "vaccine",
            "surgery",
            "therapy",
            "rehabilitation",
            "wellness",
        ]

        const ismedicalQuery = medicalKeywords.some((keyword) => message.toLowerCase().includes(keyword.toLowerCase()))

        if (!ismedicalQuery) {
            return Response.json({
                response:
                    "I'm a medical assistant for Hafeez Lab. I can only help with health and medical-related questions. Please ask me about symptoms, medical tests, health conditions, or diagnostic procedures.",
            })
        }

        // Add medical context to the prompt
        const medicalPrompt = `You are a helpful medical assistant for Hafeez Lab, a diagnostic center. Provide accurate, helpful information about health, medical conditions, symptoms, and diagnostic tests. Always recommend consulting with healthcare professionals for proper diagnosis and treatment. Keep responses concise and informative.

User question: ${message}`

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: medicalPrompt,
                                },
                            ],
                        },
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    },
                }),
            },
        )

        if (!response.ok) {
            const errorData = await response.text()
            console.error("API Error:", response.status, errorData)

            if (response.status === 429) {
                return Response.json({
                    response: "I'm currently experiencing high demand. Please try again in a few moments.",
                })
            }

            if (response.status === 403) {
                return Response.json({
                    response: "Service temporarily unavailable. Please check your API key and try again later.",
                })
            }

            if (response.status === 404) {
                return Response.json({
                    response: "Service configuration issue. Please contact support if this persists.",
                })
            }

            return Response.json({
                response: "I'm experiencing technical difficulties. Please try again in a few moments.",
            })
        }

        const data = await response.json()

        // Better error handling for API response
        if (!data.candidates || data.candidates.length === 0) {
            return Response.json({
                response: "I'm unable to process your request right now. Please try rephrasing your question.",
            })
        }

        const aiResponse =
            data.candidates[0]?.content?.parts?.[0]?.text ||
            "I'm having trouble generating a response. Please try again with a different question."

        return Response.json({ response: aiResponse })
    } catch (error) {
        console.error("Error:", error)
        return Response.json(
            {
                response: "I'm experiencing technical difficulties. Please try again in a few moments.",
            },
            { status: 200 },
        ) // Return 200 to avoid frontend errors
    }
}
