import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './Button';
import { LinkLogo } from './LinkLogo';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

interface HireMeDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HireMeDialog = ({ open, setOpen }: HireMeDialogProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className='bg-zinc-900 text-white'>
        <DialogTitle>
          <div className='flex flex-col'>
            <span>YOU ARE ONLY ONE STEP</span>
            <span>AWAY FROM REACHING OUT!</span>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className='flex items-center'>
            <div className='flex flex-row gap-3 mx-auto'>
              <LinkLogo Icon={BsWhatsapp} Link='https://wa.me/573177406686' />
              <LinkLogo
                Icon={AiOutlineMail}
                Link='mailto:johandzuluaga@gmail.com'
              />
              <LinkLogo
                Icon={BiLogoLinkedin}
                Link='https://www.linkedin.com/in/johan-zuluaga-gomez/'
              />
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

export { HireMeDialog };
