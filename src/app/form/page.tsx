"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { formSchema } from "@/schemas/eventSchema";
import Image from "next/image";

type FormData = z.infer<typeof formSchema>;

export default function EventForm() {
  const [formError, setFormError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  // Initialize the form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
      
    },
  });

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Submit handler
  function onSubmit(values: FormData) {
    console.log("Form Submitted:", values);
    // Upload the selected image file
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);
      // Perform image upload API call here
    }
    // Reset the form error when successfully submitted
    setFormError(null);
  }

  function onError(errors: any) {
    console.error("Form errors:", errors);
    setFormError("There are validation errors in your form.");
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center p-6 text-gray-900">
          Event Registration
        </h1>

        <div className="main h-full w-full flex flex-col md:flex-row bg-white/25 backdrop-blur-lg rounded-xl">
          {/* Left section: Image upload */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start p-6">
            <div
              className="relative w-64 h-64 bg-gray-100 transition duration-300 ease-in-out rounded-lg shadow-md flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("imageUpload")?.click()}
            >
              {selectedImage ? (
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Event"
                  className="object-cover w-full h-full rounded-lg"
                  width="256"
                  height="256"
                />
              ) : (
                <Image
                  src="/placeholder.svg"
                  alt="Event Placeholder"
                  className="object-cover w-full h-full rounded-lg"
                  width="256"
                  height="256"
                />
              )}
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Right section: Form */}
          <div className="w-full md:w-1/2 p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg md:text-xl font-semibold">
                        Event Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter event name"
                          className="text-base rounded-xl h-12 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg md:text-xl font-semibold">
                        Event Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter event description"
                          className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg md:text-xl font-semibold">
                        Event Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg md:text-xl font-semibold">
                        Event Time
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg md:text-xl font-semibold">
                        Event Location
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter event location"
                          className="rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Register Event
                </Button>

                {formError && (
                  <div className="mb-4 text-red-600">{formError}</div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
