const z = require("zod");

const cardContents =  z.object({
    name: z.string(),
    description: z.string(),
    interests: z.array({
        interestOne: z.string().optional(),
        interestTwo: z.string().optional(),
        interestThree: z.string().optional()
    }),
    socialLinks: z.object({
        LinkedIn: z.string().url(),
        Twitter: z.string().url(),
    })
})

module.exports = {
    cardContents
}