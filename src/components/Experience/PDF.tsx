import React, { useRef, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PDFUploader: React.FC<{ onFileSelect?: (file: File) => void }> = ({ onFileSelect }) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file && file.type === "application/pdf") {
			setSelectedFile(file);
			onFileSelect?.(file);
		} else {
			alert("Solo se permite archivos PDF");
		}
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		if (file && file.type === "application/pdf") {
			setSelectedFile(file);
			onFileSelect?.(file);
		} else {
			alert("Solo se permite archivos PDF");
		}
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

		return (
			<div>
				<label className="block font-semibold mb-2">ADJUNTAR PDF</label>
						<div
							className="bg-gray-50 border rounded-xl flex flex-col justify-center items-center h-64 cursor-pointer relative"
							onClick={handleClick}
							onDrop={handleDrop}
							onDragOver={e => e.preventDefault()}
						>
							<input
								type="file"
								accept="application/pdf"
								ref={fileInputRef}
								style={{ display: "none" }}
								onChange={handleFileChange}
							/>
							{selectedFile && (
								<button
									type="button"
									className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
									onClick={e => {
										e.stopPropagation();
										setSelectedFile(null);
										onFileSelect?.(null as any);
									}}
									aria-label="Quitar PDF"
								>
									<IoClose />
								</button>
							)}
							<FaRegFilePdf className="mb-4 text-red-600" style={{ fontSize: 120 }} />
							<span className="text-gray-500">{selectedFile ? selectedFile.name : "Haz click o arrastra tu PDF aquí"}</span>
						</div>
						
			</div>
		);
};

export default PDFUploader;
