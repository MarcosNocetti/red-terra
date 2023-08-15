import ReactQuill from 'react-quill';

export function TextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (data: any) => any;
}) {
  const options = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
  };

  return <ReactQuill modules={options} value={value} onChange={onChange} />;
}
