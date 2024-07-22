import { Dialog, DialogHeader, DialogTrigger, DialogContent,DialogTitle } from "@/components/ui/dialog";

type DialogProps = {
  title: string
  children: React.ReactNode
  triggerComponent: React.ReactNode
}
export default function Modal(props:DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {props.triggerComponent}
      </DialogTrigger>
      <DialogContent className="w-screen h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
        </DialogHeader>
        {props.children}
      </DialogContent>
    </Dialog>
  )
}