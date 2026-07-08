import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import BirthDateStep from "@/components/register-step-form/BirthDateStep";
import type { FormData } from "@/components/register-step-form/types";

const meta: Meta<typeof BirthDateStep> = {
  title: "RegisterStepForm/BirthDateStep",
  component: BirthDateStep,
};
export default meta;

type Story = StoryObj<typeof BirthDateStep>;

function Wrapper() {
  const [form, setForm] = useState<FormData>({
    lastName: "山田",
    firstName: "太郎",
    birthDate: "",
  });

  return (
    <BirthDateStep
      form={form}
      onChange={(patch) => setForm((f) => ({ ...f, ...patch }))}
      onNext={() => alert("次へが押されました")}
      onBack={() => alert("戻るが押されました")}
    />
  );
}

export const Default: Story = {
  render: () => <Wrapper />,
};
