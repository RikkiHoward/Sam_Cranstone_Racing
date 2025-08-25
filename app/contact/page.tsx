'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Handle search params on client side after hydration
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const typeParam = urlParams.get('type');
      if (typeParam === 'sponsor') {
        setFormData(prev => ({ ...prev, type: 'sponsor' }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Message Sent!</h1>
          <p className="text-gray-400 mb-6">Thanks for getting in touch. I'll get back to you soon.</p>
          <Button 
            onClick={() => setSubmitted(false)}
            variant="outline"
            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-6">
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                GET IN
              </span>
              <br />
              <span className="text-white">TOUCH</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to discuss sponsorship opportunities or have questions about racing? Let's connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">
                  Let's Talk Racing
                </h2>
                
                <div className="space-y-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="bg-red-500/20 p-3 rounded-xl">
                        <Mail className="text-red-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-400">sam@samcranstone.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="bg-blue-500/20 p-3 rounded-xl">
                        <Phone className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Phone</h3>
                        <p className="text-gray-400">+44 7XXX XXX XXX</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="bg-green-500/20 p-3 rounded-xl">
                        <MapPin className="text-green-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">Location</h3>
                        <p className="text-gray-400">United Kingdom</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Sponsorship Opportunities</h3>
                <p className="text-gray-300 mb-4">
                  Looking to partner with a driven racer? I offer various partnership levels to suit your marketing goals and budget.
                </p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Logo placement on bike and racing leathers</li>
                  <li>• Social media promotion and content</li>
                  <li>• Event appearances and brand activation</li>
                  <li>• Hospitality packages at race weekends</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="bg-gray-800 border-gray-700 text-white rounded-xl"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="bg-gray-800 border-gray-700 text-white rounded-xl"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Enquiry Type
                      </label>
                      <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="general">General Enquiry</SelectItem>
                          <SelectItem value="sponsor">Sponsorship Opportunity</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="bg-gray-800 border-gray-700 text-white rounded-xl min-h-[120px]"
                        placeholder="Tell me about your enquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
