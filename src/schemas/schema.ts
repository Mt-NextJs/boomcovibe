// import { z } from 'zod';

// export const joinFormSchema = z.object({
//     // login, join 폴더를 위한 유효성 검사
//     name: z.string().min(4, 'Username is required').max(100),
//     userId: z.string().min(4),
//     password: z
//         .string()
//         .refine(
//             (val) =>
//                 /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
//                     val,
//                 ),
//             {
//                 message:
//                     '비밀번호는 최소 8문자 이상이어야 하며 최소한 1개의 숫자, 대문자와 특수문자를 포함해야 합니다.',
//             },
//         ),
//     // confirmPassword: z.string(),
//     email: z.string().trim().email(),
// });
// .superRefine((val, ctx) => {
//     if (val.password !== val.confirmPassword) {
//         ctx.addIssue({
//             code: z.ZodIssueCode.custom,
//             path: ['confirmPassword'],
//             message: '비밀번호가 일치하지 않습니다.',
//         });
//     }
// });

// export type LoginFormData = z.infer<typeof loginFormSchema>;
