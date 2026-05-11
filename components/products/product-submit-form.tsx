//because we need to work with user inputs
"use client";

import FormField from "@/components/forms/form-field";
import { Button } from "../ui/button";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { addProductAction } from "@/lib/products/product-actions";
import { useActionState } from "react";
import { log } from "console";

const initialState = {
  success: false,
  error: {},
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );
  console.log("STATE: ", state);
  return (
    <form className="space-y-6" action={formAction}>
      <FormField
        label="Product Name"
        id="name"
        name="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error=""
        helperText=""
      />
      <FormField
        label="Slug"
        id="slug"
        name="slug"
        placeholder="my-awesome-product"
        required
        onChange={() => {}}
        error=""
        helperText="URL-friendly version of your product name"
      />

      {/* Tagline */}
      <FormField
        label="Tagline"
        id="tagline"
        name="tagline"
        placeholder="A brief, catchy description"
        required
        onChange={() => {}}
        error=""
        helperText=""
      />

      {/* //description */}
      <FormField
        label="Description"
        id="description"
        name="description"
        placeholder="Tell us more about product..."
        required
        onChange={() => {}}
        error=""
        helperText=""
        textarea
      />

      {/* Website URL */}
      <FormField
        label="Website URL"
        id="websiteURL"
        name="websiteURL"
        placeholder="https://yourproduct.com"
        required
        onChange={() => {}}
        error=""
        helperText="Enter your product's website or landing page"
      />

      {/* Tags */}
      <FormField
        label="Tags"
        id="tags"
        name="tags"
        placeholder="AI, SaaS,Productivity"
        required
        onChange={() => {}}
        error=""
        helperText="Comma-seperated tags (e.g. AI, SaaS, Productivity)"
      />
      <Button type="submit" size="lg" className="w-full">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
}
