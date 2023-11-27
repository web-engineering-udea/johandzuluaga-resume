import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './Button';

interface LearnMoreDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Title: string;
  Article: string;
  Code: string;
}

const LearnMoreDialog = ({
  open,
  setOpen,
  Title,
  Article,
  Code,
}: LearnMoreDialogProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className='bg-zinc-900 text-white'>
        <DialogTitle>
          <span>{Title}</span>
        </DialogTitle>
        <DialogContent>
          <div className='flex flex-col gap-3 ml-9'>
            <div className='flex flex-row gap-2'>
              <span>Article:</span>
              <a href={Article} className='text-blue-500 underline'>
                Click here.
              </a>
            </div>
            <div className='flex flex-row gap-2'>
              <span>Code:</span>
              <a href={Code} className='text-blue-500 underline'>
                Click here.
              </a>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button text={'Close'} OnClick={() => setOpen(false)} />
        </DialogActions>
      </div>
    </Dialog>
  );
};

export { LearnMoreDialog };
