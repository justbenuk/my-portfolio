'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { BulletList } from '@tiptap/extension-list'
import { useEffect } from 'react';
import { Toggle } from '../ui/toggle';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

interface MenuBarProps {
  editor: ReturnType<typeof useEditor> | null;
}

export default function Editor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit, BulletList],
    content: value,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  const MenuBar = ({ editor }: MenuBarProps) => {
    if (!editor) {
      return null;
    }

    return (
      <div className="flex flex-wrap items-center gap-1 border-b ">
        <Toggle size="sm" pressed={editor.isActive("bold")} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </Toggle>
        <Toggle size="sm" pressed={editor.isActive("italic")} onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </Toggle>
        <div className="control-group">
          <div className="button-group flex gap-5">
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
              Toggle bullet list
            </button>
            <button
              onClick={() => editor.chain().focus().splitListItem('listItem').run()}
              disabled={!editor.can().splitListItem('listItem')}
            >
              Split list item
            </button>
            <button
              onClick={() => editor.chain().focus().sinkListItem('listItem').run()}
              disabled={!editor.can().sinkListItem('listItem')}
            >
              Sink list item
            </button>
            <button
              onClick={() => editor.chain().focus().liftListItem('listItem').run()}
              disabled={!editor.can().liftListItem('listItem')}
            >
              Lift list item
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="border border-teal-500 rounded-md">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="overflow-scroll min-h-35 p-6" />
    </div>
  );
}

