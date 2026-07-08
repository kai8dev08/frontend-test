import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CompleteStep from "./CompleteStep";

const meta: Meta<typeof CompleteStep> = {
  title: "RegisterStepForm/CompleteStep",
  component: CompleteStep,
  args: {
    form: { lastName: "山田", firstName: "太郎", birthDate: "1990-05-15" },
    onRestart: () => alert("もう一度入力するが押されました"),
  },
};
export default meta;

type Story = StoryObj<typeof CompleteStep>;

export const Default: Story = {};
