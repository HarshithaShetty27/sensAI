import z from "zod";

export const onboardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an industry",
    }),
    subIndustry: z.string({
        required_error: "Please select a specialization",
    }),
    bio: z.string().max(50).optional(),
    experience: z.string().transform((val) => parseInt(val,10)).pipe(z.number().min(0,"Experience must be a positive number").max(50,"Experience must be less than 50 years")),
    skills: z.string().transform((val)=>
    val? val.split(",").map((skill)=>skill.trim()).filter(Boolean):undefined
),
}); 