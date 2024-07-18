'use client'
import { Dialog, DialogHeader, DialogTrigger, DialogContent,DialogTitle } from "@/components/ui/dialog";
import { CreateUpdateTaskForm } from "../forms/CreateUpdateTaskForm";
import { useState } from "react";

export default function DialogCreateUpdateTask(){

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="fixed bottom-0 w-full h-8 flex justify-center bg-red-600">
          <div>+</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create List</DialogTitle>
        </DialogHeader>
        <CreateUpdateTaskForm />
      </DialogContent>
    </Dialog>
  )
}