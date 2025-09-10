import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
         
              <span className="text-xl font-bold">Alpha Imobiliária</span>
            </div>
            <p className="text-gray-300 mb-4">
              A melhor imobiliária de Fortaleza. Encontre seu imóvel dos sonhos
              com nossa equipe especializada.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
            </div>


          </div>

      
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/properties" className="text-gray-300 hover:text-white">Imóveis</Link></li>
              {/* <li><Link href="/agents" className="text-gray-300 hover:text-white">Corretores</Link></li> */}
              <li><Link href="/about" className="text-gray-300 hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contato</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>Fortaleza, CE</p>
              <p>(85) 9999-9999</p>
              <p>contato@alphaimobiliaria.com</p>
              <p>Seg-Sex: 8h-18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Alpha Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}