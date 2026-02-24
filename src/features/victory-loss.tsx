import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface VictoryAlertProps {
  title: string;
  explanation: string;
  visible: boolean;
  setVisible: (newValue: boolean) => void;
}

function VictoryAlert({
  title,
  explanation,
  visible,
  setVisible,
}: VictoryAlertProps) {
  return (
    <AlertDialog open={visible} onOpenChange={setVisible}>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle> {title} </AlertDialogTitle>
          <AlertDialogDescription>{explanation}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Play Again</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export { VictoryAlert };
