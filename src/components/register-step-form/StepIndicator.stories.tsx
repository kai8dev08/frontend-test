import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import StepIndicator from "./StepIndicator";

const meta: Meta<typeof StepIndicator> = {
  title: "RegisterStepForm/StepIndicator",
  component: StepIndicator,
  argTypes: {
    step: {
      control: "select",
      options: ["name", "birthDate", "confirm", "complete"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof StepIndicator>;

export const Name: Story = { args: { step: "name" } };
export const BirthDate: Story = { args: { step: "birthDate" } };
export const Confirm: Story = { args: { step: "confirm" } };
export const Complete: Story = { args: { step: "complete" } };
