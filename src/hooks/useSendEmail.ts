import { emailService } from "@/services/email.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useSendEmail() {
  const { mutate, isPending, mutateAsync } = useMutation({
    mutationKey: ["send email"],
    mutationFn: async ({ name, phone, type, date }: { name: string; phone: string; type: string; date: string }) => {
      return await emailService.sendEmail(name, phone, type, date);
    },
    onSuccess() {
      toast.success("Вы успешно отправили заявку!");
    },
    onError(error: { success: boolean; message: string }) {
      if (error.message) {
        // Ошибка, которую мы передали из sendEmail
        toast.error(error.message);
      } else {
        // Обработать неопределенные ошибки
        toast.error("Произошла непредвиденная ошибка");
      }
    },
  });

  // Возвращаем mutate и isPending с правильной типизацией
  return { mutate, isPending, mutateAsync };
}
