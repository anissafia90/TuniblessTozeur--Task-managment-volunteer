import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginMutation } from "@/hooks/use-auth";
import { signInSchema } from "@/lib/schema";
import { useAuth } from "@/provider/auth-context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, Lock, LogIn, Heart } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

type SigninFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm<SigninFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { mutate, isPending } = useLoginMutation();

  const handleOnSubmit = (values: SigninFormData) => {
    mutate(values, {
      onSuccess: (data) => {
        login(data);
        console.log(data);
        toast.success("تم تسجيل الدخول بنجاح");
        navigate("/dashboard");
      },
      onError: (error: any) => {
        const errorMessage = error.response?.data?.message || "حدث خطأ ما";
        console.log(error);
        toast.error(errorMessage);
      },
    });
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 blur-3xl opacity-20">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 blur-3xl opacity-20">
          <div className="w-96 h-96 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full" />
        </div>
      </div>

      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>تونيبليس توزر</span>
          </div>
        </div>

        <Card className="shadow-2xl border-0 backdrop-blur-sm bg-white/95">
          <CardHeader className="text-center mb-2 space-y-3">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center shadow-lg">
                <LogIn className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              أهلا وسهلا
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              تسجيل الدخول إلى حسابك
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleOnSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                        <Mail className="w-4 h-4 text-blue-500" />
                        عنوان البريد الإلكتروني
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          {...field}
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between">
                        <FormLabel className="flex items-center gap-2 text-gray-700 font-semibold">
                          <Lock className="w-4 h-4 text-green-500" />
                          كلمة المرور
                        </FormLabel>
                        <Link
                          to="/forgot-password"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                        >
                          نسيت كلمتك؟
                        </Link>
                      </div>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••••"
                          {...field}
                          className="border-gray-200 focus:border-green-500 focus:ring-green-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold h-11 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  disabled={isPending}
                >
                  {isPending ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      جاري التحقق...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <LogIn className="w-4 h-4" />
                      تسجيل الدخول
                    </span>
                  )}
                </Button>
              </form>
            </Form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-600">أو</span>
              </div>
            </div>

            <CardFooter className="flex flex-col gap-4 px-0">
              <p className="text-center text-sm text-gray-600">
                ليس لديك حساب؟{" "}
                <Link
                  to="/sign-up"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  إنشاء حساب جديد
                </Link>
              </p>
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                بتسجيل الدخول، أنت توافق على شروط الخدمة الخاصة بنا
              </p>
            </CardFooter>
          </CardContent>
        </Card>

        {/* Bottom Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            🎯 منصة آمنة وموثوقة لتنظيم العمل التطوعي
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
