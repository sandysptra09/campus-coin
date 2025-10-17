'use client'

import React, { useRef, useState } from 'react'
import { Input, Textarea, Select, SelectItem, Button, Card, addToast } from '@heroui/react'
import Link from 'next/link'
import { SerializedEditorState } from 'lexical'
import { Editor } from '@/components/blocks/editor-x/editor'
import { Label } from '@/components/ui/label'

const initialValue = {
    root: {
        children: [
            {
                children: [
                    {
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: '',
                        type: 'text',
                        version: 1,
                    },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'paragraph',
                version: 1,
            },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
    },
} as unknown as SerializedEditorState

export default function PostArticle() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState<File | null>(null)

    const [isSavingDraft, setIsSavingDraft] = useState(false)
    const [isPublishing, setIsPublishing] = useState(false)

    const [editorKey, setEditorKey] = useState(0)
    const editorRef = useRef<SerializedEditorState>(initialValue)

    const resetForm = () => {
        setTitle('')
        setDesc('')
        setCategory('')
        setImage(null)
        editorRef.current = initialValue
        setEditorKey((prev) => prev + 1)
    }

    const handleSubmit = async (publish = false) => {
        if (publish) {
            setIsPublishing(true)
        } else {
            setIsSavingDraft(true)
        }

        await new Promise((res) => setTimeout(res, 1000))

        console.log({
            title,
            desc,
            category,
            image,
            content: editorRef.current,
        })

        addToast({
            title: publish ? 'Published Article' : 'Draft Saved',
            description: publish
                ? 'Your article has been successfully published.'
                : 'Your article has been successfully saved as a draft.',
            color: 'success',
            timeout: 3000,
        })

        resetForm()

        if (publish) {
            setIsPublishing(false)
        } else {
            setIsSavingDraft(false)
        }
    }

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 space-y-10">
            <div>
                <h1 className="text-xl md:text-[48px] text-secondary font-semibold mb-2">
                    Share your knowledge!
                </h1>
                <p className="text-secondary max-w-2xl">
                    Write articles to share your experiences, ideas, and inspiration with other communities.
                </p>
            </div>

            <Card shadow="sm" radius="lg" className="p-8 space-y-8">
                <Input
                    label="Article Title"
                    placeholder="Enter your article title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    variant="bordered"
                    size="md"
                />

                <Textarea
                    label="Short Description"
                    placeholder="Write a short description of your article..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    variant="bordered"
                    size="md"
                />

                <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">Cover Image</Label>
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                        variant="bordered"
                        size="md"
                    />
                    {image && (
                        <p className="text-xs text-secondary mt-1">
                            Selected Image:{' '}
                            <span className="font-medium text-secondary">{image.name}</span>
                        </p>
                    )}
                </div>

                <Select
                    label="Category"
                    placeholder="Select a category..."
                    variant="bordered"
                    selectedKeys={category ? [category] : []}
                    onSelectionChange={(keys) => setCategory(Array.from(keys)[0] as string)}
                >
                    <SelectItem key="career">Career</SelectItem>
                    <SelectItem key="sustainability">Sustainability</SelectItem>
                    <SelectItem key="education">Education</SelectItem>
                </Select>

                <div className="space-y-2 overflow-x-auto overflow-hidden">
                    <Label className="text-sm font-medium text-gray-600">Content</Label>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <Editor
                            key={editorKey}
                            editorSerializedState={editorRef.current}
                            onSerializedChange={(value) => (editorRef.current = value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
                    <Button
                        as={Link}
                        href='/user/profile'
                        color="default"
                        variant="bordered"
                        className="text-secondary order-2 sm:order-1 w-full sm:w-auto"
                    >
                        Back
                    </Button>
                    <div className="flex flex-col sm:flex-row justify-end gap-3 w-full sm:w-auto order-1 sm:order-2">
                        <Button
                            color="secondary"
                            variant="flat"
                            onPress={() => handleSubmit(false)}
                            isLoading={isSavingDraft}
                            isDisabled={isPublishing}
                            className="text-secondary"
                        >
                            Save as Draft
                        </Button>
                        <Button
                            color="primary"
                            onPress={() => handleSubmit(true)}
                            isLoading={isPublishing}
                            isDisabled={isSavingDraft}
                        >
                            Publish
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    )
}
