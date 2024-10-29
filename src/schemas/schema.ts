import { z } from 'zod';

export const loginFormSchema = z.object({
    // login, join 폴더를 위한 유효성 검사
    // name: z.string().min(4, 'Username is required').max(100),
    userId: z
        .string({ required_error: 'Please enter your id' })
        .min(4, 'User id must be at least 4 characters'),
    password: z
        .number({ required_error: 'Please enter your password' })
        .min(4, 'Password must be at least 4 characters'),
    // password: z
    //     .string()
    //     .refine(
    //         (val) =>
    //             /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    //                 val,
    //             ),
    //         {
    //             message:
    //                 '비밀번호는 최소 8문자 이상이어야 하며 최소한 1개의 숫자, 대문자와 특수문자를 포함해야 합니다.',
    //         },
    //     ),
    // confirmPassword: z.string(),
    // email: z.string().trim().email(),
});
export type SignInSchema = z.infer<typeof loginFormSchema>;
// export type SignInFields = keyof SignInSchema;

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
