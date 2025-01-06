"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/MovingBorders";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import MagicButton from "@/components/MagicButton";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import CC from "@/components/CC";
import { FaLocationArrow } from "react-icons/fa6";

function Contact() {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setMessage("");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY,
					...formData,
				}),
			});

			const result = await response.json();
			if (result.success) {
				setMessage(
					"Thank you for contacting me! I will get back to you soon."
				);
				setFormData({ name: "", email: "", message: "" });
			} else {
				setMessage("Something went wrong. Please try again.");
			}
		} catch (error) {
			console.error(error);
			setMessage("An error occurred. Please check your network connection.");
		}

		setLoading(false);
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	return (
		<section id="contactForm">
			<div className="mt-20 py-10">
				{/* <FloatingNav navItems={navItems} /> */}
				<div className="max-w-4xl mx-auto px-6">
					<h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
						Get in Touch
					</h1>
					<p className="text-center text-lg mb-10">
						Have questions? Feel free to send me a message!
					</p>

					<div className="rounded-lg shadow-lg p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							<TextField
								label="Name"
								variant="outlined"
								fullWidth
								required
								name="name"
								value={formData.name}
								onChange={handleChange}
								sx={{
									"& .MuiInputBase-root": {
										backgroundColor: "white",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: "#ccc",
									},
								}}
							/>
							<TextField
								label="Email"
								type="email"
								variant="outlined"
								fullWidth
								required
								name="email"
								value={formData.email}
								onChange={handleChange}
								sx={{
									"& .MuiInputBase-root": {
										backgroundColor: "white",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: "#ccc",
									},
								}}
							/>
							<TextField
								label="Message"
								variant="outlined"
								multiline
								rows={4}
								fullWidth
								required
								name="message"
								value={formData.message}
								onChange={handleChange}
								sx={{
									"& .MuiInputBase-root": {
										backgroundColor: "white",
									},
									"& .MuiOutlinedInput-notchedOutline": {
										borderColor: "#ccc",
									},
								}}
							/>

							<div className="flex justify-center items-center">
								{loading ? (
									<CircularProgress />
								) : (
									<MagicButton
										title="Send Message"
										icon={<FaLocationArrow/>}
										position="right"
									/>
								)}
							</div>
						</form>
						{message && (
							<p className="text-center text-lg font-medium mt-4">{message}</p>
						)}
					</div>
				</div>
			</div>
			<CC />
		</section>
	);
}

export default Contact;
