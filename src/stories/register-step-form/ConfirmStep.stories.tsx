import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ConfirmStep from "@/components/register-step-form/ConfirmStep";

const meta: Meta<typeof ConfirmStep> = {
  title: "RegisterStepForm/ConfirmStep",
  component: ConfirmStep,
  args: {
    form: { lastName: "山田", firstName: "太郎", birthDate: "1990-05-15" },
    submitting: false,
    error: null,
    onBack: () => alert("戻るが押されました"),
    onSubmit: () => alert("登録するが押されました"),
  },
};
export default meta;

type Story = StoryObj<typeof ConfirmStep>;

export const Default: Story = {};

export const Submitting: Story = {
  args: { submitting: true },
};

export const WithError: Story = {
  args: { error: "登録に失敗しました。もう一度お試しください。" },
};
