import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import NameStep from "./NameStep";
import type { FormData } from "./types";

const meta: Meta<typeof NameStep> = {
  title: "RegisterStepForm/NameStep",
  component: NameStep,
};
export default meta;

type Story = StoryObj<typeof NameStep>;

function Wrapper({ initial }: { initial: Partial<FormData> }) {
  const [form, setForm] = useState<FormData>({
    lastName: "",
    firstName: "",
    birthDate: "",
    ...initial,
  });

  return (
    <NameStep
      form={form}
      onChange={(patch) => setForm((f) => ({ ...f, ...patch }))}
      onNext={() => alert("次へが押されました")}
    />
  );
}

export const Empty: Story = {
  render: () => <Wrapper initial={{}} />,
};

export const Filled: Story = {
  render: () => <Wrapper initial={{ lastName: "山田", firstName: "太郎" }} />,
};
