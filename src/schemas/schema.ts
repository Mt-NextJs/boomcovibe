import { z } from 'zod';

export const registerFormSchema = z
    .object({
        // login, join 폴더를 위한 유효성 검사

        id: z
            .string({
                required_error: '아이디가 요구됩니다.',
            })
            .email({
                message: '유효하지 않은 아이디입니다.',
            }),

        password: z
            .string()
            .refine(
                (val) =>
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
                        val,
                    ),
                {
                    message:
                        '비밀번호는 최소 8문자 이상이어야 하며 최소한 1개의 숫자, 대문자와 특수문자를 포함해야 합니다.',
                },
            ),
        confirmPassword: z.string(),

        email: z.string().trim().email(),
    })
    .superRefine((val, ctx) => {
        if (val.password !== val.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['confirmPassword'],
                message: '비밀번호가 일치하지 않습니다.',
            });
        }
    });
