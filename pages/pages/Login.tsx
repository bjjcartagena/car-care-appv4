import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-card-light dark:bg-card-dark rounded-2xl shadow-soft dark:shadow-none p-8 transition-colors duration-200 border border-transparent dark:border-white/5">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-text-main dark:text-white mb-2">Bienvenido</h1>
                    <p className="text-text-muted dark:text-text-muted-dark">Ingresa a tu cuenta para continuar</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-main dark:text-gray-300 mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main dark:text-white placeholder-gray-400"
                            placeholder="ejemplo@correo.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-text-main dark:text-gray-300 mb-2">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main dark:text-white placeholder-gray-400"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-text-muted dark:text-gray-400">Recordarme</span>
                        </label>
                        <button type="button" className="text-primary hover:text-primary-hover font-medium transition-colors">
                            ¿Olvidaste tu contraseña?
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-all duration-200 shadow-glow hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center transform active:scale-[0.98]"
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            'Iniciar Sesión'
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-text-muted dark:text-gray-400">
                    ¿No tienes una cuenta?{' '}
                    <button onClick={() => navigate('/setup-profile')} className="text-primary hover:text-primary-hover font-bold transition-colors">
                        Regístrate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
