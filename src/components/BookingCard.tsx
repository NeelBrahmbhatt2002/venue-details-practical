import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setSelectedDate, setSelectedTime, setGuests } from '@/store/slices/venueSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useToast } from '@/components/ui/use-toast';

interface BookingCardProps {
  price: number;
  minHours: number;
}

const BookingCard: React.FC<BookingCardProps> = ({ price, minHours }) => {
  const dispatch = useAppDispatch();
  const { selectedDate, selectedTime, guests } = useAppSelector((state) => state.venue);
  const { toast } = useToast();
  
  const parsedDate = selectedDate ? new Date(selectedDate) : undefined;
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [capacity, setCapacity] = useState('');

  const handleDateSelect = (date: Date | undefined) => {
    dispatch(setSelectedDate(date ? date.toISOString() : null));
  };

  const handleTimeSelect = (time: string) => {
    dispatch(setSelectedTime(time));
  };

  const timeSlots = [
    '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM',
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
    '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
  ];

  const validationSchema = Yup.object({
    date: Yup.date().required('Date is required'),
    startTime: Yup.string().required('Start time is required'),
    endTime: Yup.string().required('End time is required'),
    capacity: Yup.number()
      .typeError('Capacity must be a number')
      .required('Capacity is required')
      .min(1, 'Capacity must be at least 1'),
  });

  return (
    <Card className="w-[360px] max-w-full border border-[#1D5EDD] shadow-lg rounded-[20px] p-0">
      <CardHeader className="pb-2 pt-6">
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-base text-gray-600">/hr</span>
        </div>
        <span className="text-xs text-gray-500 mt-1 text-center block">{minHours} hr minimum</span>
      </CardHeader>
      <CardContent className="pt-2 pb-0 px-6">
        <Formik
          initialValues={{ date: '', startTime: '', endTime: '', capacity: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            toast({
              title: 'Booking Successful!',
              description: 'Your booking has been confirmed.',
              variant: 'success',
            });
            resetForm();
          }}
        >
          {({ setFieldValue, values, isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <div className="text-[15px] font-semibold mb-2">Date and Time</div>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={
                        'w-full flex items-center justify-start rounded-md border border-gray-300 px-3 py-2 text-sm mb-1 ' +
                        (!values.date ? 'text-gray-500' : 'text-gray-900')
                      }
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {values.date ? format(new Date(values.date), 'dd MMMM yyyy') : 'Select date'}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={values.date ? new Date(values.date) : undefined}
                      onSelect={date => setFieldValue('date', date ? date.toISOString() : '')}
                      disabled={d => d < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <ErrorMessage name="date" component="div" className="text-xs text-red-500 mb-1" />
                <div className="flex gap-2 mb-1">
                  <Field name="startTime">
                    {({ field }: any) => (
                      <Select value={field.value} onValueChange={val => setFieldValue('startTime', val)}>
                        <SelectTrigger className="w-1/2 rounded-md border border-gray-300 px-3 py-2 text-sm">
                          <SelectValue placeholder="Start Time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </Field>
                  <Field name="endTime">
                    {({ field }: any) => (
                      <Select value={field.value} onValueChange={val => setFieldValue('endTime', val)}>
                        <SelectTrigger className="w-1/2 rounded-md border border-gray-300 px-3 py-2 text-sm">
                          <SelectValue placeholder="End Time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  </Field>
                </div>
                <div className="flex gap-2 mb-1">
                  <ErrorMessage name="startTime" component="div" className="text-xs text-red-500 w-1/2" />
                  <ErrorMessage name="endTime" component="div" className="text-xs text-red-500 w-1/2" />
                </div>
                <Field
                  name="capacity"
                  as={Input}
                  type="text"
                  placeholder="Capacity"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm w-full mb-1"
                />
                <ErrorMessage name="capacity" component="div" className="text-xs text-red-500 mb-1" />
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex gap-2 items-center mb-2">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-[16px] font-bold">{minHours} hr minimum</span>
                </div>
                <div className='mb-4'>
                  <span className='text-[12px] text-gray-700'>convallis tempor nisi. Mauris mattis molestie sodales. Pellentesque vehicula varius pellentesque. Etiam vehicula placerat ipsum et pretium.</span>
                </div>
                <hr />
                <div className="space-y-3 mt-4">
                  <div className="text-sm font-bold text-left">Price</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">${price} X 2.5 hours</span>
                      <span className="text-sm">${(price * 2.5).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cleaning</span>
                      <span className="text-sm">$125.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Processing</span>
                      <span className="text-sm">$53.44</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>$615.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="w-full bg-[#A020F0] hover:bg-[#8B1FCB] text-white font-medium py-3 mt-6 rounded-md"
                type="submit"
                disabled={isSubmitting}
              >
                Request to Book
              </Button>
              <div className="text-center mt-2 mb-4">
                <p className="text-xs text-gray-500">
                  Vivamus tincidunt tellus rhoncus ex interdum, sed euismod ligula faucibus.
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
