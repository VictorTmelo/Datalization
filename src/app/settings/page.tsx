'use client';

import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Settings() {

    const settingSections = [
        {
            title: 'Profile Settings',
            icon: User,
            settings: [
                { name: 'Display Name', description: 'Your name as it appears to others', type: 'text', value: 'John Doe' },
                { name: 'Email Address', description: 'Primary email for account notifications', type: 'text', value: 'john@example.com' },
                { name: 'Public Profile', description: 'Make your profile visible to others', type: 'toggle' },
            ],
        },
        {
            title: 'Notifications',
            icon: Bell,
            settings: [
                { name: 'Email Notifications', description: 'Receive updates via email', type: 'toggle' },
                { name: 'Push Notifications', description: 'Get push notifications on your devices', type: 'toggle' },
                { name: 'SMS Alerts', description: 'Receive important alerts via SMS', type: 'toggle' },
                { name: 'Weekly Summary', description: 'Get a weekly summary of your activity', type: 'toggle' },
            ],
        },
        {
            title: 'Security',
            icon: Shield,
            settings: [
                { name: 'Two-Factor Authentication', description: 'Add an extra layer of security', type: 'toggle' },
                { name: 'Login Alerts', description: 'Get notified of new login attempts', type: 'toggle' },
                { name: 'Session Timeout', description: 'Automatically log out after inactivity', type: 'toggle' },
            ],
        },
        {
            title: 'Preferences',
            icon: Palette,
            settings: [
                { name: 'Language', description: 'Select your preferred language', type: 'select', value: 'en' },
                { name: 'Timezone', description: 'Set your local timezone', type: 'select', value: 'UTC' },
                { name: 'Date Format', description: 'Choose how dates are displayed', type: 'select', value: 'MM/DD/YYYY' },
                { name: 'Compact Mode', description: 'Use a more compact interface layout', type: 'toggle' },
            ],
        },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 p-3 md:p-4 lg:p-6 overflow-auto"
        >
            <div className="space-y-4 md:space-y-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                        Settings
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Manage your account preferences and security settings
                    </p>
                </motion.div>

                <div className="space-y-4 md:space-y-6">
                    {settingSections.map((section, sectionIndex) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
                        >
                            <Card className="p-4 md:p-6 bg-card border-border">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <section.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                                        {section.title}
                                    </h2>
                                </div>

                                <div className="space-y-4 md:space-y-6">
                                    {section.settings.map((setting, index) => (
                                        <div key={setting.name}>
                                            {index > 0 && <Separator className="mb-4 md:mb-6" />}
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                                <div className="flex-1 space-y-1 min-w-0">
                                                    <Label className="text-sm md:text-base font-medium text-foreground">
                                                        {setting.name}
                                                    </Label>
                                                    <p className="text-xs md:text-sm text-muted-foreground">
                                                        {setting.description}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 w-full sm:w-auto">
                                                    {setting.type === 'toggle' && <Switch className="ml-auto sm:ml-0" />}
                                                    {setting.type === 'text' && (
                                                        <Input
                                                            defaultValue={setting.value}
                                                            className="w-full sm:w-[200px] md:w-[250px]"
                                                        />
                                                    )}
                                                    {setting.type === 'select' && (
                                                        <Select defaultValue={setting.value}>
                                                            <SelectTrigger className="w-full sm:w-[180px] md:w-[200px]">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {setting.name === 'Language' && (
                                                                    <>
                                                                        <SelectItem value="en">English</SelectItem>
                                                                        <SelectItem value="es">Español</SelectItem>
                                                                        <SelectItem value="fr">Français</SelectItem>
                                                                        <SelectItem value="de">Deutsch</SelectItem>
                                                                    </>
                                                                )}
                                                                {setting.name === 'Timezone' && (
                                                                    <>
                                                                        <SelectItem value="UTC">UTC</SelectItem>
                                                                        <SelectItem value="EST">EST</SelectItem>
                                                                        <SelectItem value="PST">PST</SelectItem>
                                                                        <SelectItem value="CET">CET</SelectItem>
                                                                    </>
                                                                )}
                                                                {setting.name === 'Date Format' && (
                                                                    <>
                                                                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                                                                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                                                                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                                                                    </>
                                                                )}
                                                            </SelectContent>
                                                        </Select>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border flex flex-col sm:flex-row justify-end gap-3">
                                    <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
                                    <Button className="w-full sm:w-auto">Save Changes</Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <Card className="p-4 md:p-6 bg-destructive/10 border-destructive/20">
                    <h3 className="text-base md:text-lg font-semibold text-destructive mb-2">Danger Zone</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-4">
                        Irreversible actions that will permanently affect your account
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground w-full sm:w-auto">
                            Delete Account
                        </Button>
                        <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground w-full sm:w-auto">
                            Reset All Settings
                        </Button>
                    </div>
                </Card>
            </div>
        </motion.main>
    );
}
