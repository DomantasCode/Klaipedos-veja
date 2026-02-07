import React, { useState, useRef } from 'react';
import { Phone, MapPin, Calendar, Send, Upload, X, CheckCircle, Loader2, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Here you would implement actual sending logic (e.g. FormData to backend / EmailJS)
    console.log('Form Data:', formData);
    console.log('Files:', files);

    setStatus('success');

    // Reset after success
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setFiles([]);
    }, 5000);
  };

  return (
    <div className="container mx-auto py-12" id="contact">
      <div className="bg-nature-dark rounded-[2.5rem] p-6 md:p-10 lg:p-10 relative overflow-hidden shadow-2xl border border-white/5">

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nature-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-earth-brown/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-8 relative z-10">

          {/* Left Content: Info & Context */}
          <div className="lg:w-5/12 text-center lg:text-left flex flex-col justify-center gap-10">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Susisiekite dėl <br />
                <span className="text-stone-300">savo projekto</span>
              </h2>

              <p className="text-stone-400 text-lg leading-relaxed font-light">
                Turite klausimų ar norite pasimatyti objektą gyvai? Užpildykite formą <br className="hidden md:block" /> ir mes susisieksime artimiausiu metu.
              </p>
            </div>

            <div className="space-y-8 mt-16 sm:mt-24">
              {/* Phone */}
              <div className="flex items-start gap-4 justify-center lg:justify-start group">
                <div className="p-3 bg-nature-green/20 rounded-2xl text-nature-light group-hover:bg-nature-green group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Telefonas</h4>
                  <a href={CONTACT_INFO.phone.href} className="text-stone-300 hover:text-white transition-colors block mt-1 text-xl font-serif">
                    {CONTACT_INFO.phone.display}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="p-3 bg-white/5 rounded-2xl text-earth-brown">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Lokacija</h4>
                  <p className="text-stone-400 mt-1">{CONTACT_INFO.address.text}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="p-3 bg-white/5 rounded-2xl text-earth-brown">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">El. paštas</h4>
                  <a href={CONTACT_INFO.email.href} className="text-stone-400 hover:text-white transition-colors block mt-1">
                    {CONTACT_INFO.email.display}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 justify-center lg:justify-start">
                <div className="p-3 bg-white/5 rounded-2xl text-earth-brown">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Darbo laikas</h4>
                  <p className="text-stone-400 mt-1">{CONTACT_INFO.hours.text}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Dynamic Form */}
          <div className="lg:w-7/12 bg-white rounded-[2rem] p-8 md:p-10 text-gray-800 shadow-2xl relative z-20">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-nature-dark mb-2">Žinutė išsiųsta!</h3>
                <p className="text-gray-500 max-w-xs mx-auto mb-8">
                  Ačiū, gavome jūsų užklausą. Susisieksime su jumis kaip įmanoma greičiau.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-xl transition-colors"
                >
                  Siųsti naują žinutę
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Jūsų vardas</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Vardenis Pavardenis"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-nature-green/50 focus:border-nature-green transition-all shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Telefonas</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+370 600 00000"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-nature-green/50 focus:border-nature-green transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">El. paštas</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="vartotojas@pastas.lt"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-nature-green/50 focus:border-nature-green transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Jūsų žinutė</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Trumpai aprašykite sklypo situaciją ar pageidavimus..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-nature-green/50 focus:border-nature-green transition-all resize-none shadow-sm"
                  ></textarea>
                </div>

                {/* File Upload Section */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 flex items-center justify-between">
                    <span>Nuotraukos (pasirinktinai)</span>
                    <span className="text-[10px] font-normal opacity-70">JPG, PNG (max 5MB)</span>
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-stone-300 hover:border-nature-green hover:bg-nature-green/5 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all group active:scale-[0.99]"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="p-3 bg-stone-100 rounded-full text-stone-400 group-hover:text-nature-green group-hover:bg-white transition-colors mb-2 shadow-sm">
                      <Upload size={24} />
                    </div>
                    <p className="text-sm font-medium text-stone-600 group-hover:text-nature-dark">
                      Spauskite čia norėdami įkelti
                    </p>
                  </div>

                  {/* Image Previews */}
                  {files.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {files.map((file, index) => (
                        <div key={index} className="relative group w-20 h-20 rounded-lg overflow-hidden border border-stone-200 shadow-sm">
                          <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-nature-dark text-white font-bold py-4 rounded-xl hover:bg-earth-brown transition-all shadow-lg hover:shadow-earth-brown/30 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-4 transform active:scale-[0.98]"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Siunčiama...
                    </>
                  ) : (
                    <>
                      Siųsti užklausą
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;